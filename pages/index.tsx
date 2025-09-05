import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { SAMPLE_CARD } from "../constants";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card {...SAMPLE_CARD} />
      <div className="mt-4">
        <Button label="Book Now" onClick={() => window.alert("Booking...")} />
      </div>
    </main>
  );
}
