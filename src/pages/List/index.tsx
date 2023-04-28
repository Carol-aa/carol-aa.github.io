
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import TableList from '@/components/List/Table';
import Search from '@/components/List/Search';


const HomePage: React.FC = () => {

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Search></Search>
        <TableList/>
      </div>
    </PageContainer>
  );
};

export default HomePage;
