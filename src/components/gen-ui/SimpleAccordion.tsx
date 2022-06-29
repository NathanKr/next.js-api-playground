import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";
import { FC } from "react";

interface ISimpleAccordionItem {
  summary: string;
  details: string;
}

export interface ISimpleAccordion {
  items: ISimpleAccordionItem[];
}

const SimpleAccordion: FC<ISimpleAccordion> = ({ items }) => {
  const elems = items.map((it, i) => (
    <Accordion key={i}>
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{it.summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{it.details}</Typography>
      </AccordionDetails>
    </Accordion>
  ));
  return <div>{elems}</div>;
};

export default SimpleAccordion;
