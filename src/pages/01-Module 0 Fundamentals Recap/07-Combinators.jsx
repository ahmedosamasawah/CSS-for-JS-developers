import { NavLink } from "react-router-dom";

const Combinators = () => {
  return (
    <main className="container">
      <article className="content-wrapper rounded">
        <h1 lang="en" dir="ltr" className="main-title">
          Combinators
        </h1>
        <p>
          لنفترض أننا نعمل على إنشاء صفحة ويب لأحد العملاء. قمنا بالفعل ببناء
          الهيكل الأساسي للصفحة باستخدام HTML، والآن نبدأ في كتابة كود CSS لجعل
          الصفحة تبدو أنيقة ومتناسقة. في صفحتنا، نجد العديد من العناصر من نوع{" "}
          <code>&lt;a&gt;</code>، وهي تشمل روابط للتنقل في القائمة العلوية{" "}
          <code>&lt;nav&gt;</code>، وروابط أخرى موزعة في محتوى الصفحة، بالإضافة
          إلى روابط في أسفل الصفحة <code>&lt;footer&gt;</code>.
        </p>
        <p>
          ماذا نفعل في حالة رغبتنا في تصميم الروابط الخاصة بقائمة التنقل فقط؟
          يمكننا الاستعانة بـ{" "}
          <strong style={{ color: "blueviolet" }}>combinator</strong> في CSS،
          وهي أداة تُستخدم لتحديد عناصر HTML بناءً على علاقتها بعناصر أخرى داخل
          الـ DOM. على سبيل المثال، يمكننا استخدام combinator لاستهداف أو تحديد
          الروابط الموجودة داخل قائمة التنقل فقط، دون أن نؤثر على الروابط في
          أجزاء أخرى من الصفحة.
        </p>

        <p>لاحظ المثال التالي:</p>

        <iframe
          height="400"
          style={{ width: "100%" }}
          title="Combinators"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/PoLEQbm?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/PoLEQbm">
            Combinators
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          عندما نضع مسافة بين <code style={{ color: "#da0079" }}>nav</code> و
          <code style={{ color: "#da0079" }}>a</code> في CSS، نحن نجمع بين اثنين
          من المحددات (selectors) بطريقة محددة جداً: نحن نقول أن الـ styles يجب
          أن تُطبق فقط على الروابط <code style={{ color: "#da0079" }}>a</code>{" "}
          التي توجد فقط في روابط التنقل أعلى الصفحة
          <code style={{ color: "#da0079" }}>nav</code>. وهذا ما حدث في المثال
          السابق.
        </p>
        <p>
          مصطلح combinator يُشير إلى الحرف الذي يجمع بين محددات selectors
          متعددة. في هذه الحالة، الحرف المستخدم للجمع بين الـ nav و الـ a هو
          المسافة، والذي يجمع بين nav و a لإنشاء محدِّد الأحفاد
          <strong> Descendant Selector</strong>.
        </p>
        <p>
          الـ descendant selector يُطبق على جميع العناصر الأحفاد، بغض النظر عن
          مدى تعمقها. على سبيل المثال، ستظل عناصر a تعمل حتى لو كانت داخل list.
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="Descendant Selector"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/mdopxOL?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/mdopxOL">
            Descendant Selector
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <p>
          <br />
          في CSS، يمكننا التمييز بين الأطفال (Children) والأحفاد (Descendants).
          فكر في شجرة العائلة: الطفل يكون فقط مستوى واحد أسفل من الوالد. أما
          الوريث قد يكون مستوى واحد أسفل (طفل)، أو مستويين أسفل (حفيد)، أو ثلاثة
          مستويات أسفل (ابن حفيد) وهكذا...
        </p>
        <p>
          في هذه الحالة، يمكننا استخدام محدد الطفل{" "}
          <strong>Child Combinator</strong>، والذي يستخدم الرمز
          <code lang="en" dir="ltr">
            &gt;
          </code>
          . يُستخدم هذا المحدِّد لاستهداف العناصر التي هي أطفال مباشرة لعنصر
          آخر، وليس الأحفاد. على سبيل المثال، <code>nav &gt; a</code> سيستهدف
          فقط عناصر a التي هي أطفال مباشرة لـ nav، ولن يتم تحديد العناصر a التي
          هي أعمق في التداخل.
        </p>
        <iframe
          height="400"
          style={{ width: "100%" }}
          title="Child Combinators"
          src="https://codepen.io/Ahmed-Osama-Al-Sawah/embed/VwRydeL?default-tab=html%2Cresult&editable=true&theme-id=dark"
          loading="lazy"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah/pen/VwRydeL">
            Child Combinators
          </a>
          by Ahmed Osama Al-Sawah (
          <a href="https://codepen.io/Ahmed-Osama-Al-Sawah">
            @Ahmed-Osama-Al-Sawah
          </a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </article>
      <footer>
        <div>
          <NavLink to="/Exercise" className="next">
            التالي
          </NavLink>
        </div>
        <div>
          <NavLink to="/PseudoElements" className="prev">
            السابق
          </NavLink>
        </div>
      </footer>
    </main>
  );
};

export default Combinators;
