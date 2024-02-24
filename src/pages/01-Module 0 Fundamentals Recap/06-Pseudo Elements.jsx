import CustomTitle from "../../components/CustomTitle";
import InfoField from "../../components/InfoField";

const PseudoElements = () => {
  return (
    <main className="container">
      <article className="content-wrapper rounded">
        <CustomTitle enTitle="Pseudo Elements" arTitle="العناصر الوهمية" />
        <p>
          (pseudo-elements) تشبه ال (pseudo-classes)، لكنها لا تستهدف حالة محددة
          مثل ال pseudo-classes. بدلاً من ذلك، تستهدف هذه العناصر (العناصر
          الفرعية) داخل عنصر معين. هذا يعني أنها تُستخدم لتصميم أجزاء محددة داخل
          عنصر HTML، مثل الأحرف الأولى أو السطور الأولى داخل فقرة، دون الحاجة
          إلى إنشاء عنصر فعلي جديد في الـ HTML.
        </p>
        <p>
          على سبيل المثال، يمكننا استخدام العنصر الوهمي Placeholder داخل ال
          input field، باستخدام الأمر
          <code lang="en" dir="ltr">
            ::placeholder
          </code>
          ، والتي بدورها ستساعدنا على كتابة نصٍ وهمي داخل ال input element، وذلك
          باستخدام CSS فقط:
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="Pseudo Elements"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/VwRMbJx?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/VwRMbJx">
            Pseudo Elements
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          في المثال السابق، استخدمنا ال تستخدم العناصر الوهمية (pseudo-elements)
          اثنين من النقاط (::) بدلاً من واحدة، على الرغم من أن بعض العناصر
          الوهمية تدعم أيضاً صياغة النقطة الواحدة.
        </p>
        <p>
          إذا توقفنا وفكرنا في الأمر، فإن شيئاً مثيراً للاهتمام يحدث هنا. لم نقم
          صراحةً بإنشاء عنصر <code>&lt;placeholder&gt;</code>، ولكن بإضافة خاصية
          العنصر الوهمي إلى <code>&lt;input&gt;</code>، يتم إنشاء عنصر وهمي.
        </p>

        <p>
          لهذا السبب يُطلق عليهم اسم العناصر
          <span style={{ color: "#da0079" }}>الوهمية</span> — حيث تستهدف هذه
          المحددات (selectors) عناصر في
          <a
            href="https://www.youtube.com/watch?v=LlQC9sU0coM&list=PLDoPjvoNmBAxx97QDMOCpzxbu1ZHJ4i7i"
            target="_blank"
            className="link"
          >
            {" "}
            DOM{" "}
          </a>
          التي لم نقم بإنشائها صراحةً في HTML.
        </p>
        <InfoField type="warn">
          <strong className="aside-header" lang="en" dir="ltr">
            placeholders and accessibility:
          </strong>
          <p>
            قد تكون سمعت أن استخدام العناصر الوهميَّة (placeholders) يمكن أن
            تكون سيئةً لإمكانية الوصول ولا ينبغي استخدامها.
          </p>
          <p>
            ولكن في رأي رُوَّاد تطوير الويب، استخدامها يكون جيدًا عندما يتم ذلك
            بشكل صحيح. المشكلة هي أن العديد من المطورين يستخدمونها بشكل غير
            صحيح.
          </p>
        </InfoField>
        <h3 lang="en" dir="ltr" className="sec-title">
          before and after
        </h3>
        <p>
          اثنان من أكثر العناصر الوهمية (Pseudo Elements) شيوعًا هما
          <code lang="en" dir="ltr">
            ::before و ::after
          </code>
          .
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="before and after"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/yLwzEOr?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/yLwzEOr">
            before and after
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          تُضاف هذه العناصر الوهمية داخل العنصر، مباشرة قبل وبعد محتوى العنصر.
          يمكننا إعادة تطبيق المثال أعلاه كما يلي:
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="before and after 2nd"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/jOJGKjO?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/jOJGKjO">
            before and after 2nd
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          لا يوجد فرق كبير في الأداء بين المثالين السابقين.
          <code lang="en" dir="ltr">
            ::before و ::after
          </code>{" "}
          ليست إلا عناصر span سرية، لا أكثر.
        </p>
        <p>
          يجب أن تعلم أن هناك بعض المخاوف المتعلقة بإمكانية الوصول لـ
          <code lang="en" dir="ltr">
            ::before و ::after
          </code>
          . بعض قارئات الشاشة قد تحاول نطق المحتوى. بينما قد تتجاهلها قارئات
          أخرى تماماً. هذا التناقض يمثل مشكلة.
        </p>
        <p>
          ومع ذلك، إذا كان التأثير زخرفياً بالكامل مثل الأشكال الملونة (دوائر،
          مربعات، ...الخ)، أعتقد أنه من المقبول إنشاؤها باستخدام
          <code>content</code>:
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="before and after 3rd"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/qBvPypK?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/qBvPypK">
            before and after 3rd
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </article>
    </main>
  );
};

export default PseudoElements;
