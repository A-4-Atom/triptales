import TripsTakenCard from "@/components/TripsTakenCard";
import FutureTripsCard from "@/components/FutureTripsCard";
import { client } from "../lib/client";
export const revalidate = 20;
async function getData() {
  const res = await client.fetch('*[_type == "journalEntries"]');
  const res2 = await client.fetch('*[_type == "futureJournalEntries"]');
  return [res, res2];
}

export default async function Home() {
  const [myTrips, futureTrips] = await getData();

  const tripsTakenElements = myTrips.map((item) => (
    <TripsTakenCard key={item._id} {...item} />
  ));

  const futureTripsElements = futureTrips.map((item) => (
    <FutureTripsCard key={item._id} {...item} />
  ));

  return (
    <>
      <h1 className="trips-taken">
        Adventures Explored: My Journey Across the Globe
      </h1>
      <div className="cards-container">{tripsTakenElements}</div>
      <h1 className="future-trips">Destinations on My Horizon</h1>
      <div className="cards-container">{futureTripsElements}</div>
    </>
  );
}
