import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function Home() {

  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("1db763a2-eedd-4ea8-871e-2d8b452b2b23");

  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">

          <Billboard data={billboard} />

          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-6">
            <ProductList
              title={"Featured Products"}
              description={"Our latest product collection"}
              items={products}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
