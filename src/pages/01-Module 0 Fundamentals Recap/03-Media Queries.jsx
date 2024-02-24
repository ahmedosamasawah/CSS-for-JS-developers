import CodeBlock from "../../components/CodeBlock";
import Span from "../../components/Span";

const codeBlock1 = [
  {
    code: [
      { type: "comment", content: "// Javascript" },
      { type: "property", content: "if (condition) {" },
      {
        type: "comment",
        content: "  // Some JS that will run if the condition is met.",
      },
      { type: "property", content: " }" },
    ],
  },
];

const codeBlock2 = [
  {
    code: [
      { type: "comment", content: "/* CSS */" },
      { type: "property", content: "@media (condition) {" },
      {
        type: "comment",
        content: "  // Some CSS that will run if the condition is met.",
      },
      { type: "property", content: " }" },
    ],
  },
];

const MediaQueries = () => {
  return (
    <main className="container">
      <article className="content-wrapper rounded">
        <h1 lang="en" dir="ltr" className="main-title">
          Media Queries
        </h1>
        <p>
          الويب هو منصة واسعة للغاية، لذا سوف نتعامل مع مجموعة متنوعة من الأجهزة
          وأحجام الشاشات، من الهواتف الصغيرة إلى التلفزيونات الكبيرة.
        </p>
        <p>
          للتكيف مع هذه الشاشات المختلفة في الأحجام والأشكال، تُوفِّر لنا CSS ما
          يُعرف بـ<Span style={{ color: " blue" }}>Media Queries</Span>وهي تقنية
          تسمح لنا بكتابة كود CSS ليتم تطبيقه على أحجام شاشات معينة أو ظروف عرض
          محددة. هذا يجعل تصميم الموقع يتكيف مع مختلف الأجهزة.
        </p>
        <p>
          التصميم المتجاوب أو
          <Span style={{ color: " rgb(224, 147, 3)" }}>Responsive Design</Span>
          هو كتابة كود CSS حتى يعمل بشكل صحيح على مجموعة واسعة من الأجهزة وأحجام
          الشاشات، وحديثًا صار التصميم المُتجاوب جُزءً كبيرًا من ال Front-End،
          وهو موضوع سنغوص فيه بعمق لاحقًا. لكن الآن، دعونا نركز على المفاهيم
          الأساسية.
        </p>
        <p>
          يتم استخدام<Span style={{ color: " blue" }}>@media</Span>لكتابة أكواد
          CSS مُتجاوبة. يمكنك التفكير بها ك
          <Span style={{ color: " #da0079" }}>if Statement</Span>في JavaScript،
          حيث يتم تنفيذ أكواد CSS فقط إذا تم استيفاء شروط معينة (مثل عرض
          الشاشة).
        </p>
        <p>
          بهذه الطريقة، يمكنك ضمان أن موقعك يظهر بشكل جيد ويعمل بشكل صحيح على
          مجموعة متنوعة من الأجهزة، من الهواتف المحمولة إلى الشاشات الكبيرة.
        </p>

        <CodeBlock blocks={codeBlock1} />
        <CodeBlock blocks={codeBlock2} />
        <p>هيا نرى معًا هذا المثال:</p>
        <iframe
          height="400"
          style={{ width: " 100%" }}
          scrolling="no"
          title="Media Queries"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/eYXEexK?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/eYXEexK">
            Media Queries
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          في هذا المثال، الشرط هو
          <code>max-width: 300px</code>. إذا كانت الصفحة عرضها ما بين
          <code>0px</code> و <code>300px</code> سوف يتم تطبيق أو تنفيذ كود ال
          CSS الموجود داخل ال<Span style={{ color: " blue" }}>@media</Span>وسوف
          يتحول اللون من حالته العادية أي الأسود إلى اللون
          <Span style={{ color: " red" }}>الأحمر</Span>كما حددنا في الكود.
        </p>
        <p>
          حاول أن تغير عرض الشاشة لترى كيف سيتغير لون النص تلقائيًا عندما يكون
          عرض الشاشة أقل من <code>301px</code>.
        </p>
      </article>

      <article className="content-wrapper rounded">
        <h3 className="sec-title">إخفاء المُحتوى</h3>
        <p>
          يتم استخدام ال media queries في كثيرٍ من الأحيان لإظهار مُحتوى مُعيَّن
          بناءً على عرض الشاشة
        </p>
        <p>
          في المثال الآتي هُناك عنوانان أو
          <Span style={{ color: " blueviolet" }}>Two h2 Elements</Span>، وسوف
          يتم عرض عنوان واحد فقط بناءً على عرض الشاشة الحالي
        </p>
        <iframe
          height="400"
          style={{ width: "100%", borderRadius: "5px" }}
          title="Hiding Content"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/PoLJwJm?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/PoLJwJm">
            Untitled
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          الأمر <code>display: none</code> هو يزيل عنصر من المُحتوى المعروض؛
          كأنه لا يوجد. تلقائيًا، سنُخفي أي عناصر تحتوي على class بقيمة
          <code>large-screens</code>.
        </p>
        <p>
          لكن، إذا كان عرض الشاشة لدينا 300 بكسل على الأقل، فإننا نطبق تعديلات
          خاصة. وهذا يشمل عرض عناصر <code>large-screens</code>، وإخفاء عناصر
          <code>small-screens</code>.
        </p>
        <p>
          هذه الحيلة غالباً ما تُستخدم لإظهار المُحتوى بناءً على العرض الحالي
          للشاشة. حيث يرى مستخدموا الشاشات الكبيرة قائمة من الروابط، بينما يرى
          مستخدموا الهواتف المحمولة والشاشات الصغيرة زر ال
          <span style={{ color: " #da0079" }}> humberger</span>.
        </p>
      </article>
    </main>
  );
};

export default MediaQueries;
