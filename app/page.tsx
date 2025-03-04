import styles from './page.module.scss'
import SplitText from './components/SplitText'

const navigation_data = [
  {
    label: 'vw.calc()',
    href: 'https://github.com/raymall/vw-calc',
  },
  {
    label: '[auth-starter]',
    href: 'https://github.com/raymall/auth-starter',
  },
  {
    label: 'Activity Aggregator',
    href: 'https://github.com/raymall/activity-aggregator',
  },
  {
    label: 'Shopify Status Checker',
    href: 'https://github.com/raymall/shopify-status-checker',
  },
]

const footer_navigation_data = [
  {
    label: 'github',
    href: 'https://github.com/raymall',
  },
  {
    label: '/',
    href: null,
  },
  {
    label: 'instagram',
    href: 'https://www.instagram.com/raymallperez/',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{``}</h1>
      <SplitText
        text='ray.dev'
        className={styles.title}
        delay={100}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 50px, 0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        // easing="easeOutCubic"
        threshold={0.2}
        rootMargin='-50px'
      />
      
      <main className={styles.main}>
        <nav className={styles.nav}>
          <ul className={styles.nav_items}>
            {navigation_data.length && navigation_data.map((item, index) => (
              <li key={index} className={styles.nav_item}>
                <a
                  className={styles.nav_link}
                  target='_blank'
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      
      <footer className={styles.footer}>
        <nav className={styles.footer_nav}>
          <ul className={styles.footer_nav_items}>
            {footer_navigation_data.length && footer_navigation_data.map((item, index) => (
              <li key={index} className={styles.footer_nav_item}>
                {item.href ? (
                  <a
                    className={styles.footer_nav_link}
                    target='_blank'
                    href={item.href}
                  >
                    {item.label}
                  </a>
                ): (
                  <span className={styles.footer_nav_divider}>
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}
