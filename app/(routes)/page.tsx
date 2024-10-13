import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate=0;

export default async function Home() {
  const billboard= await getBillboard("1db763a2-eedd-4ea8-871e-2d8b452b2b23");
  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">

          <Billboard data={billboard} />

        </div>
      </Container>
    </>
  );
}
