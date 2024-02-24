import { NavLink } from "react-router-dom";
import ModuleHeader from "../../components/ModuleHeader";

const Introduction = () => {
  return (
    <main className="container">
      <ModuleHeader
        imgSrc="01-hero-img.png"
        moduleNum="1"
        moduleTitle="مراجعة الأساسيات"
      />
      <article className="content-wrapper">
        <p>
          تم تصميم هذه الدورة التعليمية لتوسيع فهمكم للغة CSS، وهي موجهة لتعزيز
          المعرفة وليست مجرد دليل أساسي للمبتدئين.
        </p>
        <p>
          كمطور يتعلم بنفسه - كما فعلتُ أنا - نجد أحياناً بعض النقاط الغامضة في
          معلوماتنا. لقد استخدمتُ CSS لمدة تقارب العامين، ومع ذلك اكتشفتُ الكثير
          من الجوانب الأساسية أثناء متابعتي لهذه الدورة.
        </p>
        <p>
          الهدف من هذا القسم التمهيدي هو ملء هذه الفجوات في المعرفة، وضمان أن
          يكون لدى جميع المشاركين نفس الأساس القوي والراسخ.
        </p>
        <p>
          حتى وإن كنتَ تمتلك خبرة متقدمة في CSS، أؤمن بأن هذه الوحدة ستضيف إلى
          معلوماتك وتمنحك بعض الإضافات الجديدة!
        </p>
      </article>
      <footer>
        <div>
          <NavLink to="/AnatomyOfStyleRule" className="next">
            التالي
          </NavLink>
        </div>
        <div>
          <NavLink className="prev"></NavLink>
        </div>
      </footer>
    </main>
  );
};

export default Introduction;
