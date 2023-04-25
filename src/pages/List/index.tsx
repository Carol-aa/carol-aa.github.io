import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import TableList from '@/components/List/Table';
import Search from '@/components/List/Search';

import { searchDetails } from '@/services/list'
const HomePage: React.FC = () => {
  const { name } = useModel('global');
 (async()=>{
  const val =await searchDetails(1) ;
  console.log(val)
 })()
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Search></Search>
        <TableList data={{obj:1}}/>
      </div>
    </PageContainer>
  );
};

export default HomePage;
