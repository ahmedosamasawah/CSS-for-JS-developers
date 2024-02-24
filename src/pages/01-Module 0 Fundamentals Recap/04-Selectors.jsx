import Span from "../../components/Span";
import CodeBlock from "../../components/CodeBlock";
import CustomTitle from "../../components/CustomTitle";
import { NavLink } from "react-router-dom";

const codeBlock = [
  {
    comment: "/* Turn all links red! */",
    selector: "a",
    properties: [{ name: "color", value: "red" }],
  },
  {
    comment:
      "\n/* \n Remove the underline from all elements that \n have been given a class of `navigation-link`\n*/",
    selector: ".navigation-link",
    properties: [{ name: "text-decoration", value: "none" }],
  },
];

const Selectors = () => {
  return (
    <main className="container">
      <article className="content-wrapper rounded">
        <CustomTitle enTitle="Selectors" arTitle="المُحَدِّدات" />
        <p>
          تأتي CSS بمجموعة كبيرة من ال selectors (المُحدِّدات)، ويمكن دمج ومزج
          هذه المُحدِّدات بطرق مثيرة للاهتمام.
        </p>
        <p>
          ومن أبسط هذه ال selectors أسماء العناصر في HTML أو ال Class Name الخاص
          بهم:
        </p>
        <CodeBlock blocks={codeBlock} />
        <p>
          في المثال السابق، استخدمنا إسم العنصر
          <Span style={{ color: " #da0079" }}>a</Span>لتحديد أي عنصر في صفحتنا
          من النوع <span style={{ color: " #da0079" }}>anchor</span>، ثم طبقنا
          عليه الأمر وهو التلوين باللون{" "}
          <span style={{ color: " red" }}>الأحمر.</span>
        </p>
        <p>
          ثم قمنا بتحديد أي عنصر يحمل class بقيمة
          <Span style={{ color: " #da0079" }}>navigation-link</Span>وطبقنا عليه
          الأمر، وهو إزالة الخط السفلي.
        </p>
      </article>
      <footer>
        <div>
          <NavLink to="/PseudoClasses" className="next">
            التالي
          </NavLink>
        </div>
        <div>
          <NavLink to="/MediaQueries" className="prev">
            السابق
          </NavLink>
        </div>
      </footer>
    </main>
  );
};

export default Selectors;
