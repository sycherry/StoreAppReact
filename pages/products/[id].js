import { initialData } from '../../initialData';
import Image from 'next/image'
import Layout from '../../components/layout'
import Breadcrumb from '../../components/breadcrumb'
import Button from '../../components/button'

export default function PostWrapper(props) {
  const { post } = props;
  return (
    <Layout>
      <article className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10">
        <Breadcrumb
          post={post} />

        <div className="md:flex md:flex-row">
          <div className="md:basis-1/2 mb-6 md:mb-0">
            <Image
              src={post.photo}
              alt={`Washing machine ${post.title}`}
              width={800}
              height={800}
              className="border border-gray-800"
              objectFit="cover"
            />
          </div>

          <div className="md:basis-1/2 md:pl-8 lg:pl-10">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 mb-4">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {post.title}</h1>
            </div>

            <div>
              <h3 class="sr-only">Description</h3>
              <div class="space-y-6">
                <p class="text-base text-gray-900">{post.detail}</p>
              </div>
            </div>

            <Button
              text={"Edit item"}
              post={post} />
          </div>
        </div>
      </article>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const initialDataList = initialData.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      post: initialDataList[0],
    },
  };
};

export async function getStaticPaths() {
  const paths = initialData.map((data) => ({
    params: { id: data.id.toString() },
  }))
  return {
    paths,
    fallback: false
  };
}