interface AboutUsProps {
  language: "en" | "cs"
}

export default function AboutUs({ language }: AboutUsProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-xelto-gray">{language === "en" ? "Who We Are" : "Kdo jsme"}</h2>
      <p className="text-muted-foreground">
        {language === "en"
          ? "Optipacker is a joint effort between Optipacker Team and Xelto Digital Czechia, combining industry expertise with advanced digital solutions."
          : "Optipacker je společný projekt týmu Optipacker a Xelto Digital Czechia, který spojuje odborné znalosti z průmyslu s pokročilými digitálními řešeními."}
      </p>
    </section>
  )
}

