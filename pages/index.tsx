import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>next-blog</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.imagewrapper}>
				<Image
					className={styles.profile}
					width={144}
					height={144}
					priority
					src="/images/blue_profile.png"
					alt="profile"
				/>
			</div>
			<h1 className={styles.title}>blog 📝</h1>
		</div>
	)
}

export default Home
