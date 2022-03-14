import styles from './index.less';
import Father from '@/components/Father/Father';
import Child_left from '@/components/Father/components/Child_left';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h1 className={styles.title}>Page index</h1>
      <Father>
      <div className='right'>你饭吃多了？</div>
      </Father>
    </div>
  );
}
