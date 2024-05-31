import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '@/components/layout';

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>

                </Head>

                <Image
                    src="/images/profile.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                />
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </Layout >
        </>
    );
}