import { NavLink } from "react-router-dom";
import CodeBlock from "../../components/CodeBlock";
import CustomTitle from "../../components/CustomTitle";
import List from "../../components/List";
import VideoPlayer from "../../components/VideoPlayer";

const codeBlock1 = [
  {
    selector: "article a",
    properties: [
      { name: "color", value: "deeppink" },
      { name: "color", value: "black" },
    ],
  },
  {
    selector: "\naside a",
    properties: [
      { name: "color", value: "black" },
      { name: "text-decoration", value: "underline" },
    ],
  },
];

const codeBlock2 = [
  {
    selector: "article a:hover",
    properties: [{ name: "text-decoration", value: "underline" }],
  },
  {
    selector: "\naside a:hover",
    properties: [{ name: "text-decoration", value: "none" }],
  },
];

const listItems1 = [
  <>
    <div>
      يجب أن تكون الروابط الرئيسية للمقالات بلون <code>deeppink</code>، دون
      تسطير. عند تمرير المؤشر فوقها، سيظهر تسطير.
    </div>
  </>,
  <>
    <div>
      يجب أن تكون الروابط في آخر المقالة باللون الأسود، مع تسطير. عند تمرير
      المؤشر فوقها، سيختفي التسطير.
    </div>
  </>,
];

const listItems2 = [
  <>
    <div>الخطوة الأولى هي تحديد العناصر وفقًا للـ container الخاص بها.</div>
  </>,
];

const listItems3 = [
  <>
    <div>
      الخطوة الثانية هي تطبيق ال styles الخاصة بالـ
      <code lang="en" dir="ltr">
        :hover
      </code>
    </div>
  </>,
];

const Exercise = () => {
  return (
    <main className="container">
      <article className="content-wrapper rounded">
        <CustomTitle type="main" enTitle="Exercise" arTitle="تمرين" />
        <p>
          في هذا التمرين، سوف نقوم بالتعديل على مقالة عن النبي ﷺ لتحتوي على
          روابط مُزيَّنة.
        </p>
        <p>هذه هي النتيجة المُتوقَّعة:</p>
        <div className="centered-img">
          <img src="/assets/08-Exercise-01.png" alt="Exercise Image" />
        </div>
        <p>إليك ما ستفعله:</p>

        <List items={listItems1} />

        <p>يجب أن يتم ذلك دون تعديل HTML: لا يجب إضافة أي classes للعناصر.</p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="1st exercise"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/YzgepPz?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/YzgepPz">
            1st exercise
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </article>

      <article className="content-wrapper rounded">
        <CustomTitle enTitle="Solution" arTitle="الحل" type="sec" />
        <p>
          أولاً، قد تفكر في إنشاء class لكل رابط، ثم استخدام هذا الـclass كمُحدد
          لتطبيق styles الخاصة بكل عنصر على حدة، كالتالي:
        </p>
        <div className="video-wrapper">
          <VideoPlayer src="/assets/08-Exercise-01.webm" playbackRate={1.7} />
        </div>
        <p>
          ولكن، تكمن المشكلة في أن استخدام class بشكل مكثَّف قد لا يكون أمراً
          مثالياًً. السبب في ذلك هو أنه مع توسع الموقع، سيُصبح من الضروري تذكر
          الـ class الخاص بكل عنصر لاستخدامه كمُحدد في تزيين هذا العنصر. لذا،
          يُفضل استخدام child combinator في هذه الحالة، كالتالي:
        </p>
        <List items={listItems2} />
        <CodeBlock blocks={codeBlock1} />
        <p>
          نحن نقول هنا: طبق الـ styles المذكورة على كل عنصر من نوع
          <code>&lt;a&gt;</code> موجود داخل العنصر <code>&lt;article&gt;</code>،
          وبعدها قم بتطبيق ال styles المذكورة على كل عنصر من نوع
          <code>&lt;a&gt;</code> داخل العنصر <code>&lt;aside&gt;</code>.
        </p>
        <List items={listItems3} />
        <CodeBlock blocks={codeBlock2} />
      </article>
      <footer>
        <div>
          <NavLink to="/Units" className="next">
            التالي
          </NavLink>
        </div>
        <div>
          <NavLink to="/Combinators" className="prev">
            السابق
          </NavLink>
        </div>
      </footer>
    </main>
  );
};

export default Exercise;
