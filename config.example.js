// -----------------------------------------------------------------
// CONFIGURATION FILE (Example)
// -----------------------------------------------------------------

// 1. Supabase Configuration
// REPLACE THESE WITH YOUR OWN SUPABASE CREDENTIALS
export const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';
export const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';

// 2. Table and Bucket Names
export const PROJECT_TABLE = 'Projects';
export const EMPLOYEE_TABLE = 'Employees';
export const LOCATION_TABLE = 'Location';
export const BUCKET_NAME = 'project-files';

// 3. Application Mappings
export const statusMap = {
    survey: 'Pending Survey',
    design: 'Pending Design',
    bidding: 'Pending Bidding',
    pm: 'Project Management',
    completed: 'Completed',
    closed: 'Closed'
};

export const fileWarning = ' (Please use English filenames only)';

// 4. Fields By Team (Configuration for dynamic forms)
// ... (The rest of the config structure remains the same as your original file)
export const fieldsByTeam = {
    survey: [
        { name: 'projectName', label: 'Project Name', type: 'text', required: true },
        // ... add other fields structure here
    ],
    // ... add other roles
};
