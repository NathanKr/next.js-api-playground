import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";
import PageName from "src/types/PageName";
import { useRouter } from "next/router";
import { getComponentUrl } from "src/utils/page-name-utils";

export default function MuiTabs() {
  const [tabValue, setTabValue] = useState<PageName>(PageName.Home);
  const router = useRouter();

  const handleChange = (event: SyntheticEvent, newTabValue: PageName) => {
    setTabValue(newTabValue);
    router.push(getComponentUrl(newTabValue))
  };

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={PageName.Home} label="Home" />
        <Tab value={PageName.Blogs} label="Blogs" />
        <Tab value={PageName.Comments} label="Comments" />
        <Tab value={PageName.Portfolio} label="Portfolio"/>
        <Tab value={PageName.About} label="About" />
      </Tabs>
    </div>
  );
}
