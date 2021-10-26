const { join } = require('path');
const { App } = require('@aws-cdk/core');
const { CdkStackSveltekit } = require('@yippiecloud/cdk-stack-sveltekit');

const app = new App();

new CdkStackSveltekit(app, 'JAMStack-Workshop', {	
	serverPath: join(process.cwd(), '.svelte-kit/output/server-bundle'),
	staticPath: join(process.cwd(), '.svelte-kit/output/static'),
	domainName: 'mikebild.com',
	hostName: 'demo1',	
	env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});
