import { urlFor } from "../lib/client";
import map from "../public/map.svg";
import Image from "next/image";

export default function TripsTakenCard(props) {
  return (
    <div className="card-container">
      <span className="image-container">
        <Image
          src={urlFor(props.image).width(450).url()}
          alt=""
          width={1080}
          height={720}
        />
      </span>
      <span className="info">
        <Image src={map} alt="location logo" height={15} width={10} />
        <span className="location">{props.location}</span>
        <span>
          <a className="link" href={props.mapsUrl}>
            View On Google Maps
          </a>
        </span>
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
      </span>
    </div>
  );
}
