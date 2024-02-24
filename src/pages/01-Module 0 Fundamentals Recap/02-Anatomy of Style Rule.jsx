import CodeBlock from "../../components/CodeBlock";

const codeBlock = [
  {
    selector: ".success-text",
    properties: [{ name: "color", value: "green" }],
  },
];

const AnatomyOfStyleRule = () => {
  return (
    <main className="container">
      <article className="content-wrapper rounded">
        <h1 className="main-title">المكونات الأساسية لقاعدة الأنماط في CSS</h1>
        <p>
          أدرك أن بعض المصطلحات قد تكون صعبة الفهم أحيانًا، ولكن لا داعي للقلق،
          فمع الأمثلة ستصبح الأمور أوضح وأسهل.
        </p>
        <CodeBlock blocks={codeBlock} />
        <p>عند كتابة كود CSS، نتعامل مع جزئين رئيسيين:</p>
        <ol>
          <h2 lang="en" dir="ltr" className="sub-sec-title">
            1. Selector
          </h2>
          <p>
            يُستخدم لاختيار العنصر الذي نود
            <span style={{ color: "hsl(333deg, 100%, 45%)" }}> تزيينه</span>. في
            مثالنا، المُحدِّد هو
            <span style={{ color: "#aa00ff" }}> success-text</span>، وهذا يعني
            أن ال style سيطبق على أي عنصر في HTML يحمل class بقيمة{" "}
            <code>success-text</code>. في بعض الحالات، قد يكون المُحدِّد عبارة
            عن اسم العنصر نفسه مثل <code>p</code> أو <code>h1</code>.
          </p>
          <h2 lang="en" dir="ltr" className="sub-sec-title">
            2. Declaration
          </h2>
          <p>
            بعد تحديد العنصر، الإعلان هو التزيين نفسه (style). يتكون من خاصية
            <strong style={{ color: "blue" }}> Property</strong> وقيمة
            <strong style={{ color: "green" }}> Value</strong>. في مثالنا،
            الخاصية هي
            <code>color</code> والقيمة هي <code>green</code>. بكل بساطة، هذا
            يعني أن لون النص للعناصر المحددة سيكون أخضر.
          </p>
        </ol>
        <p>
          بهذا الشكل، يصبح كود CSS واضح ومنظم، حيث يسهل علينا تحديد العناصر
          وتطبيق ال (styles) المرغوبة عليها.
        </p>
      </article>

      <section className="content-wrapper rounded">
        <img
          style={{ marginInline: "auto", maxWidth: "100%" }}
          src="/assets/02-diagram.png"
          alt="Anatomy of a Style Rule Diagram"
        />
      </section>
    </main>
  );
};

export default AnatomyOfStyleRule;
