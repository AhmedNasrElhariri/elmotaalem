import Head from 'next/head';
import JobSkills from '../src/components/pages/job-skills';

export default function JobSkillsPage() {
  return (
    <div>
      <Head>
        <title>Job Skill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <JobSkills />
    </div>
  );
}
