const { join } = require('path');
const { App } = require('@aws-cdk/core');
const { CdkStackSveltekit } = require('@yippiecloud/cdk-stack-sveltekit');

const app = new App();
const name = process.env.STAGE || 'devspace';
const domainName = process.env.DOMAIN || 'mikebild.com';

new CdkStackSveltekit(app, `JAMStack-Workshop-${name}`, {
	hostName: name,
	domainName,
	serverPath: join(process.cwd(), '.svelte-kit/output/server-bundle'),
	staticPath: join(process.cwd(), '.svelte-kit/output/static'),
	env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});
