import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
   const { t } = useTranslation();
     return (
       <div className="Projects">
         <section className="header">
           <h2>{t("projectsPage.title")}</h2>
         </section>
       </div>
     );
}