import { NavLink } from "react-router-dom";
import CustomTitle from "../../components/CustomTitle";
import InfoField from "../../components/InfoField";
import Span from "../../components/Span";

const PseudoClasses = () => {
  return (
    <main className="container">
      <article className="content-wrapper rounded">
        <CustomTitle enTitle="Pseudo Classes" arTitle="الفِئات الوهميَّة" />
        <p>
          لنتخيَّل أن هناك زر مُعيَّن، ونحن نريد أن نغير لون نص هذا الزر عند
          توجيه الماوس نحو هذا الزر. لحُسن الحَظ، يمكننا تطبيق ذلك عن طريق ال
          pseudo-classes في CSS.
        </p>
        <p>
          ال pseudo-classes هي تلك التي نستخدمها لتطبيق بعض ال styles على
          العناصر عند حدوث شيءٍ مُعيَّن:
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="pseudo-classes"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/QWoqyMQ?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/QWoqyMQ">
            pseudo-class
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          في المثال السابق، استخدمنا ال
          <code lang="en" dir="ltr">
            :hover
          </code>{" "}
          pseudo-class لإضافة styles للعنصر المُحَدَّد (
          <span style={{ color: "#aa00ff" }}>button</span>)، وبالتالي ستُطبق ال
          styles على الزر المُحَدَّد عندما يتم توجيه المؤشِّر نحوه.
        </p>
        <p>
          هذا يشبه أحداث <code>onMouseEnter</code> / <code>onMouseLeave</code>{" "}
          في <span style={{ color: "#FFC300" }}>JavaScript</span>، وهي تُستخدم
          لتحديد ما يحدث عندما يمرر المستخدم الماوس فوق عنصر ما أو يبعده عنه،
          ولكن سنحتاج إلى استخدام <code>addEventLestener</code> على العناصر التي
          نريد العمل عليها، وسنحتاج أيضًا لإدارة ال
          <Span style={{ color: "blue" }}>state</Span>الخاص بالعنصر المُراد
          العمل عليه، وذلك لمعرفة ما إذا كان العنصر يتم تمرير الماوس فوقه في
          الوقت الحالي أم لا، هذا يعني أنه علينا تتبع هذه الحالة وتحديثها
          استجابةً لأحداث الماوس.
        </p>

        <p>
          من ناحية أخرى، في CSS، تتم هذه العملية بشكل أبسط بكثير. CSS يوفر لنا
          ال pseudo-classes، وهي طريقة لتطبيق ال styles على عناصر HTML بناءً على
          حالتها. على سبيل المثال، يمكن استخدام pseudo-class مثل
          <code lang="en" dir="ltr">
            :hover
          </code>
          لتغيير style العنصر عندما يمرر المستخدم الماوس فوقه. هذا يتم تلقائيًا
          في CSS دون الحاجة لكتابة أي
          <Span style={{ color: "#FFC300" }}>JavaScript</Span>لتتبع الحالة أو
          استخدام addEventLestener.
        </p>
        <p>
          توفِّر لنا CSS{" "}
          <a
            target="_blank"
            className="link"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"
          >
            العديد من ال pseudo-classes
          </a>
          ، وسوف نتعلَّم الكثير منهم لاحِقًا بإذن الله، لذا فلنركِّز الآن على
          بعضٍ منهم.
        </p>

        <h2 lang="en" dir="ltr" className="sec-title">
          focus Pseudo-class
        </h2>
        <p>
          تأتي لغة HTML مع عناصر تفاعلية مثل الأزرار والروابط وال input fields.
          عندما نتفاعل مع أحد هذه العناصر (سواء بالضغط عليها أو التنقل إليها
          باستخدام المفتاح Tab)، يصبح العنصر في حالة تركيز (focus). في هذه
          الحالة، يمكننا الكتابة في ال input field أو الضغط على مفتاح Enter
          لاتباع رابط.
        </p>
        <p>
          تسمح لنا{" "}
          <code lang="en" dir="ltr">
            :focus
          </code>{" "}
          بتطبيق بعض ال styles عندما يكون العنصر في حالة تركيز أو focus.
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="Focus Pseudo-classes"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/oNVGYMG?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/oNVGYMG">
            Focus Pseudo-classes
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          حاول التركيز على الأزرار واحدًا تلو الآخر ليتم تطبيق ال styles التي
          حددناها في الأعلى.
        </p>
        <InfoField type="warn">
          <strong className="aside-header">
            لماذا يجب علينا إستخدام ال{" "}
            <span lang="en" dir="ltr">
              focus Pseudo-class
            </span>
            ؟
          </strong>
          <p>
            من الممكن أنك تتسائل، لماذا من الضروري إستخدام ال focus styling،
            لماذا من المهم معرفة العنصر الذي في حالة focus؟
          </p>
          <p>
            ال focus styles مهمة جدا لل accessibility وتحسين تجربة المستخدم، وهي
            مفيدة أيضًا بشكل أساسي للأشخاص الذين لا يستخدمون جهاز إدخال (مثل
            الماوس، لوحة اللمس، أو الإصبع على شاشة تعمل باللمس). فهي تساعد
            المستخدمين الذين يعتمدون على لوحة المفاتيح في التنقل. تُظهر ال focus
            styles أين أنت على الصفحة، وأي عنصر تم اختياره.
          </p>
          <p>
            نصيحة: لا تُضف <code>outline: none</code> للتخلص من حدود ال focus
            التي تُضاف افتراضيًّا عن طريق المتصفح (ما لم تستبدلها بمجموعة من ال
            styles الأكثر وضوحًا ومنَاسَبَةً لموقعك).
          </p>
        </InfoField>
        <h2 lang="en" dir="ltr" className="sec-title">
          checked Pseudo-class
        </h2>
        <p>
          ال checked Pseudo-class يتم تطبيقها فقط على ال{" "}
          <a
            href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_checkbox"
            target="_blank"
            className="link"
          >
            checkboxes
          </a>{" "}
          و{" "}
          <a
            href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_radio"
            target="_blank"
            className="link"
          >
            radio buttons
          </a>
          ، يُمكنك تطبيق styles إضافية للدلالة على أن هذه ال checkboxes أو radio
          buttons مُفعَّلة أو نشطة.
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="Checked Pseudo-class"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/XWGeMPw?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/XWGeMPw">
            Checked Pseudo-class
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          المتصفحات لا تقدم مرونة كبيرة عندما يتعلق الأمر بال checkboxes و radio
          buttons، لكن هذه الحيلة الذكية تتيح لك تطبيق بعض خصائص CSS بناءً على
          حالتها.
        </p>
      </article>
      <footer>
        <div>
          <NavLink to="/PseudoElements" className="next">
            التالي
          </NavLink>
        </div>
        <div>
          <NavLink to="/Selectors" className="prev">
            السابق
          </NavLink>
        </div>
      </footer>
    </main>
  );
};

export default PseudoClasses;
