import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { NextResponse } from 'next/server';

const execAsync = promisify(exec);

export async function GET() {
  try {
    const scriptPath = path.join(process.cwd(), 'scripts', 'insights.py');
    const { stdout } = await execAsync(`python "${scriptPath}"`);
    const data = JSON.parse(stdout);
    return NextResponse.json({ status: 'success', engine: 'Python 3.13', data });
  } catch (err) {
    return NextResponse.json({
      status: 'success',
      engine: 'Next.js Runtime',
      data: {
        candidate: "DEEBA FATIMA",
        role: "Clinical Research Professional",
        metrics: {
          gcp_compliance: "100%",
          clinical_systems: 6,
          publications: 1,
          active_roles: 2
        },
        highlights: [
          "Clinical Trial Administration & eTMF Management",
          "Source Data Verification (SDV) & Site Operations",
          "ICH-GCP Regulatory Compliance & Audit Readiness"
        ]
      }
    });
  }
}
