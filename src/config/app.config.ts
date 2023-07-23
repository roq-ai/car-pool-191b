interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Administrator', 'Vehicle Owner'],
  tenantName: 'Organization',
  applicationName: 'Car pool',
  addOns: ['notifications', 'chat', 'file'],
};
