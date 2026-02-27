import fs from 'fs';
import path from 'path';

export async function createBugReport(testInfo) {

  console.log('Bug Reporter Triggered:', testInfo.status);

  // Only create bug if test FAILED
  if (testInfo.status !== 'failed') return;

  const screenshot = testInfo.attachments.find(a => a.name === 'screenshot');
  const trace = testInfo.attachments.find(a => a.name === 'trace');

  const bug = {
    title: `[AUTO][CRITICAL] ${testInfo.title} - Test Failure`,
    severity: "Critical",
    testName: testInfo.title,
    testFile: testInfo.file,
    browser: testInfo.project.use.browserName,
    expectedResult: "Application should behave as per test assertion",
    actualResult: testInfo.error?.message || "Unknown failure",
    evidence: {
      screenshot: screenshot?.path || "No screenshot found",
      trace: trace?.path || "No trace found"
    },
    timestamp: new Date().toISOString()
  };

  const bugDir = 'auto-bugs';

  if (!fs.existsSync(bugDir)) {
    fs.mkdirSync(bugDir);
  }

  const filePath = path.join(
    bugDir,
    `${Date.now()}-${testInfo.title.replace(/\s+/g, '_')}.json`
  );

  fs.writeFileSync(filePath, JSON.stringify(bug, null, 2));

  console.log(`🚨 Auto Bug Created: ${filePath}`);
}