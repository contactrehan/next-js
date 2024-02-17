import PageCard from "../components/pageCard";

export default function NewCard() {
  return (
    <div className="container flex flex-wrap justify-center mx-auto p-8">
      <div className="container grid grid-cols-3 gap-4 ">
        <PageCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus."
          }
          title={"Something"}
        />
        <PageCard bgcolor={"red"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus."
          }
          title={"Something"}
        />
        <PageCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus."
          }
          title={"Something"}
        />
        <PageCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus."
          }
          title={"Something"}
        />
        <PageCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus."
          }
          title={"Something"}
        />
        <PageCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus."
          }
          title={"Something"}
        />
        <PageCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus."
          }
          title={"Something"}
        />
        <PageCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus."
          }
          title={"Something"}
        />
        <PageCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus."
          }
          title={"Something"}
        />
      </div>
    </div>
  );
}
