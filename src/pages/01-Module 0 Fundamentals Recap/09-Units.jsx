import { NavLink } from "react-router-dom";
import CodeBlock from "../../components/CodeBlock";
import CustomTitle from "../../components/CustomTitle";
import InfoField from "../../components/InfoField";
import List from "../../components/List";

const codeBlock1 = [
  {
    selector: ".box",
    properties: [
      { name: "width", value: "1000px" },
      { name: "margin-top", value: "32px" },
      { name: "padding", value: "8px" },
      { name: "font-size", value: "16px" },
    ],
  },
];

const codeBlock2 = [
  {
    selector: "h1",
    properties: [
      { name: "font-size", value: "24px" },
      { name: "padding-bottom", value: "2em" },
      { name: "padding", value: "8px" },
      { name: "font-size", value: "16px" },
    ],
  },
];

const codeBlock3 = [
  {
    selector: "html",
    comment: "/* 20% bigger `rem` values, app-wide! */",
    properties: [{ name: "font-size", value: "1.2em" }],
  },
];

const listItems = [
  <>
    <div>
      بالنسبة للنصوص <code>&lt;p&gt;</code>، يتم استخدام وحدة الـ
      <code>rem</code>
      عمومًا، لأنها تتمتع بفوائد تتعلق بسهولة الوصول والتي تعد مهمة.
    </div>
  </>,
  <>
    <div>
      عندما يتعلق الأمر بالـ properties التي ترتبط بالـ
      <a
        href="https://www.youtube.com/watch?v=2f3MEkllP9Q"
        target="_blank"
        className="link"
      >
        {" "}
        Box Model{" "}
      </a>
      — مثل: <code>padding</code> ،<code>border</code> ،<code>margin</code>— من
      الأفضل استخدام البكسلات (<code>px</code>). فهي أكثر بديهيةً وراحةً من
      استخدام <code>rem</code>.
    </div>
  </>,
  <>
    <div>
      بالنسبة للعرض والارتفاع (
      <code lang="en" dir="ltr">
        width and height
      </code>
      )، فهذا يعتمد على ما إذا كنت تريد أن يكون حجم العنصر ثابتًا أو نسبيًا. أي
      إذا كنت تريد أن يكون العرض الخاص بالعنصر يساوي حجمًا ثابتًا، مثلًا{" "}
      <code lang="en" dir="ltr">
        250px
      </code>
      ، أو إذا كنت تريد أن يكون العرض الخاص بالعنصر مُعتمد على عرض عنصر آخر،
      مثلًا أن يأخذ العنصر{" "}
      <code lang="en" dir="ltr">
        50%
      </code>{" "}
      من العرض المُتاح.
    </div>
  </>,
];

const Units = () => {
  return (
    <main className="container">
      <article className="content-wrapper rounded">
        <CustomTitle type="main" arTitle="الوحدات" enTitle="Units" />
        <p>
          الوحدة الأكثر شيوعًا لقياس الأحجام هي البكسل
          <code>px</code>
        </p>
        <CodeBlock blocks={codeBlock1} />
        <p>
          البكسلات جيدة لأنها تتوافق إلى حد كبير مع ما تراه على الشاشة. إنها
          وِحدَةٌ يرتاح لها العديد من المطورين.
        </p>
        <h2 className="sec-title" lang="en" dir="ltr">
          Ems
        </h2>
        <p>
          وحدة الـ <code>em</code> هي وحدة نسبية مثيرة للاهتمام، إذ تساوي حجم
          الخط للعنصر الحالي.
        </p>
        <p>إذا كان لدينا عنوان وطبَّقنا عليه الـ styles الآتية:</p>
        <CodeBlock blocks={codeBlock2} />
        <p>
          إذاً، سيتم تطبيق قيمة <code>padding-bottom</code> بمقدار{" "}
          <code>48px</code> على هذا العنصر. هذا يرجع إلى أن قيمة{" "}
          <code>font-size</code>
          للعنصر تساوي <code>24px</code>. بالتالي، يمكن حساب <code>48px</code>{" "}
          كناتج للعملية الحسابية <code>24px</code> مضروبة في <code>2m</code>.
        </p>
        <p>جرّب التعديل في حجم الخط لترى كيف يعمل:</p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="Em Unit"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/eYXVxNM?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/eYXVxNM">
            Em Unit
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          هذا مثالٌ آخَر: جرب تغيير حجم الخط لمعرفة كيف سيؤثر ذلك على العناصر
          الفرعية
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="Em Unit 2"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/mdoXvZW?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/mdoXvZW">
            Em Unit 2
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          رأيي أنه لا يجب أن نلجأ كثيرًا لاستخدام الـ ems. يمكن أن يكون من
          المفاجئ أن يؤثر تعديل في حجم الخط على مسافات العناصر الفرعية.
        </p>
        <p>
          هذا صحيح بشكل خاص عندما يتعلق الأمر بالـ
          <a
            target="_blank"
            className="link"
            href="https://nandbox.com/all-you-need-to-know-about-component-based-architecture/"
          >
            {" "}
            component-based architecture{" "}
          </a>
          الحديثة. استخدام em يعني أن واجهة المستخدم ل component معين ستتغير
          بناءً على حجم الخط للـ container التي يوضع فيها. هذا قد يكون مفيدًا،
          ولكن في معظم الأحيان، يكون مصدر إزعاج.
        </p>
        <p>
          المثالان المعروضان هما الحالتان العمليتان الوحيدتان التي استطعت
          التفكير فيهما. في معظم الحالات، يعمل rem بشكل أفضل.
        </p>
        <h2 lang="en" dir="ltr" className="sec-title">
          Rems
        </h2>
        <p>
          وحدة الـ rem تشبه إلى حد كبير وحدة الـ em، لكنها تتميز بفارق أساسي وهو
          أنها دائماً مرتبطة نسبياً بعنصر الجِذر، وهو
          <code lang="en" dir="ltr">
            &lt;html&gt;
          </code>
          .
        </p>
        <p>
          جميع وحدات rem في التطبيق الخاص بك ستأخذ مرجعيتها من عنصر
          <code lang="en" dir="ltr">
            &lt;html&gt;
          </code>{" "}
          الجذري. بشكل افتراضي، يكون حجم خط العنصر{" "}
          <code lang="en" dir="ltr">
            &lt;html&gt;
          </code>{" "}
          16px، وبالتالي، فإن 1rem سيكون مساوياً لـ 16 بكسل.
        </p>
        <p>
          قم بمراجعة الـ playground التالي، ثم غير حجم الخط لعنصر الـ
          <code>html</code>في كود CSS:
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="Rem Unit"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/jOJZRmW?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/jOJZRmW">
            Rem Unit
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          لاحظ كيف أن جميع النصوص تتغير حجمها بشكل متناسق عند تغيير حجم الخط
          الخاص بعنصر <code>html</code>. هذا هو السبب في تفضيل الناس لوحدة
          <code>rem</code>. بغض النظر عن مكان العنصر في شجرة الـ DOM، تظل
          <code>rem</code> ثابتة ومتسقة.
        </p>
        <p>
          تتصرف بثبات وتنبؤية، مثل البكسلات، ولكنها تحترم تفضيلات المستخدم عندما
          يتعلق الأمر بزيادة أو تقليل الحجم الافتراضي للخطوط.
        </p>
        <p>
          <strong>ملاحظة</strong>،
          <span style={{ color: "deeppink", fontStyle: "italic" }}>
            {" "}
            لا يجب فعلياً تحديد حجم الخط بوحدة px على عنصر
            <code>html</code>
          </span>
          . هذا سيتجاوز حجم الخط الافتراضي الذي اختاره المستخدم. السبب الوحيد
          لقيامنا بذلك هنا هو لتوضيح كيف تعمل وحدة rem، ولمحاكاة المستخدم الذي
          يغير حجم الخط الافتراضي لديه.
        </p>
        <p>
          إذا كنت ترغب حقاً في تغيير حجم الخط لعنصر html، يمكنك القيام بذلك
          باستخدام وحدات الـ ems أو الـ rems:
        </p>
        <CodeBlock blocks={codeBlock3} />
        <p>
          حقيقة ممتعة: عند تحديد وحدات <code>em</code> و <code>rem</code> في
          عنصر html، تعمل هذه الوحدات بنفس الطريقة تمامًا! عادةً، يمكن لقيم
          <code>em</code> أن تتأثر بالعناصر الأصل لها، ولكن html هو العنصر الجذر
          الأعلى في الصفحة. وهو أيضًا العنصر الذي تكون وحدات
          <code>rem</code> نسبية إليه.
        </p>
        <InfoField type="note">
          <strong className="aside-header" lang="en" dir="ltr">
            Units and Accessibility
          </strong>
          <p>
            قد تكون قد سمعت أن استخدام وحدة البكسل (pixels) في تصميم الويب يمكن
            أن يكون سيئًا بالنسبة للـ accessibility، لأنه لا يسمح للمستخدمين
            بتغيير حجمها. على سبيل المثال، قد يرغب الأشخاص الذين يعانون من ضعف
            في الرؤية في زيادة حجم الخط، واستخدام البكسل يمنعهم من ذلك.
          </p>
          <p>
            قد تكون سمعت أيضًا أن هذا مجرد أسطورة وأنه لم يعد صحيحًا، وأن
            استخدام البيكسل جيد.
          </p>
          <p>في الواقع، الإجابة الصحيحة تقع في مكان ما بين هذين الإشاعتين.</p>
        </InfoField>
        <CustomTitle enTitle="Percentages" arTitle="النسب المئوية" />
        <p>
          وحدة النسبة المئوية (Percentages) غالباً ما تُستخدم مع العرض/الارتفاع،
          كطريقة لاستهلاك جزء من المساحة المتاحة.
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="Percentages Unit"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/jOJZgLW?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/jOJZgLW">
            Percentages Unit
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          في هذا المثال، قمنا بإنشاء صندوق بحجم ثابت (250 بكسل عرض في 250 بكسل
          طول)، ثم أضفنا إليه عنصر فرعي بحجم نسبي. عندما يتغير حجم عنصر
          <span lang="en" dir="ltr">
            .box
          </span>
          ، سيتم تغيير حجم العنصر الفرعي بالتناسب.
        </p>
        <h2 className="sec-title" lang="en" dir="ltr">
          The bottom line
        </h2>
        <p>السؤال هنا: أي وحدة يجب استخدامها؟</p>
        <List items={listItems} />
        <p>
          أما بالنسبة لاستخدام الوحدة (<code>em</code>)، فمن الأفضل استخدامها في
          الحالات النادرة التي ترغب فيها أن تتناسب خاصية ما مباشرة مع حجم الخط.
        </p>
        <p>
          هناك العديد من الوحدات الأخرى كذلك. سيتم تقديم بعضها لاحقًا. أما
          الوحدات الأخرى مثل (<code>in</code>)، فهي مفيدة فقط في حالات متخصصة
          جدًا، لذلك لن نغطيها.
        </p>
      </article>
      <footer>
        <div>
          <NavLink></NavLink>
        </div>
        <div>
          <NavLink to="/Exercise" className="prev">
            السابق
          </NavLink>
        </div>
      </footer>
    </main>
  );
};

export default Units;
