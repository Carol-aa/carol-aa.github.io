
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '审核平台' };
}

export const layout = () => {
  return {
    logo: 'https://img0.baidu.com/it/u=985872259,3736043201&fm=253&fmt=auto&app=138&f=PNG?w=500&h=450',
    menu: {
      locale: true,
    },
  };
};
