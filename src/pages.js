export default () => {
  return [
    {
      title: 'Overview',
      key: 'overview',
      url: '/overview',
      icon: 'icmn icmn-home',
      showInMenu: true
    },
    {
      divider: true,
    },
    {
      title: 'Accounting periods',
      key: 'accounting-periods',
      url: '/accounting-periods',
      icon: 'icmn icmn-books',
      showInMenu: true
    },
    {
      divider: true,
    },
    {
      title: 'Calendar',
      key: 'calendar',
      url: '/calendar',
      icon: 'icmn icmn-calendar',
      showInMenu: true
    },
    {
      divider: true,
    },
    {
      title: 'Clients',
      key: 'clients',
      icon: 'fa fa-briefcase',
      url: '/clients',
      showInMenu: true
    },
    {
      title: 'Client Profile',
      key: 'clientsProfile',
      icon: 'fa fa-briefcase',
      url: '/clients/:clientKey',
      showInMenu: false
    },
    {
      title: 'Invoices',
      key: 'invoices',
      icon: 'icmn icmn-file-text',
      url: '/invoices',
      showInMenu: true
    },
    {
      title: 'Add Invoice',
      key: 'addInvoice',
      icon: 'icmn icmn-file-text',
      url: '/invoices/new',
      showInMenu: false
    },
    {
      divider: true,
    },
    {
      title: 'Expenses',
      key: 'expenses',
      icon: 'icmn-credit-card',
      url: '/expenses',
      showInMenu: true
    },
    {
      title: 'Director withdrawals',
      key: 'director-withdrawals',
      icon: 'icmn icmn-user-tie',
      url: '/director-withdrawals',
      showInMenu: true
    },
    {
      divider: true,
    },
    {
      title: 'Shareholders',
      key: 'shareholders',
      icon: 'icmn icmn-users',
      url: '/shareholders',
      showInMenu: true
    },
    {
      title: 'Dividends',
      key: 'dividends',
      icon: 'fa fa-money',
      url: '/dividends',
      showInMenu: true
    },
    {
      divider: true,
    },
    {
      title: 'VAT Return',
      key: 'vat_return',
      icon: 'icon icmn-loop',
      url: '/vat-return',
      showInMenu: true
    },
    {
      title: 'Corporation Tax',
      key: 'corporation_tax',
      icon: 'fa fa-percent',
      url: '/corporation-tax',
      showInMenu: true
    },
    {
      divider: true,
    },
    {
      title: 'Company documents',
      key: 'company_documents',
      icon: 'icmn icmn-folder',
      url: '/documents',
      showInMenu: true
    }
  ]
}