import { useStore } from "@nanostores/react";
import { Button } from "../../components/btn/btn";
import { state } from "../../state";
import TEXT from "../../TEXT";
import "./index.css";

export const Form = () => {
  const context = useStore(state.home);

  return (
    <div
      // className={`fixed inset-0 z-10 bg-white-0.7 shadow-white table duration-300 ${
      //   isOpen
      //     ? "visible opacity-100 translate-y-0"
      //     : "opacity-0 invisible translate-y-24"
      // }`}
      className={`form-bg ${context.isFormOpen ? "open" : ""}`}
    >
      <div className="table-cell align-middle">
        <form
          className="p-8 w-80 rounded bg-white-0.7 relative shadow-black-0.5 mx-auto my-0"
          action="./form_handler.php"
          method="post"
        >
          <span
            className={`absolute top-0 right-0 m-2.5 w-5 h-5 cursor-pointer bg-black
              before:after:w-full before:after:h-0.5 before:after:bg-aubergine before:after:rounded-sm
              before:after:absolute before:after:top-1/2 before:after:l-0 before:after:-mt-px
              hover:before:shadow-aubergine hover:after:shadow-aubergine before:rotate-45 after:-rotate-45`}
            onClick={state.toggleFormState}
          />
          <h3 className="text-xl text-center pb-3.5 text-black">
            {TEXT.formTitle}
          </h3>
          <div className="mb-2.5">
            <input
              className="block w-full p-3.5 border border-solid border-black resize-none font-montserrat"
              type="text"
              name="fio"
              placeholder={TEXT.name}
              required
            />
          </div>
          <div className="mb-2.5">
            <input
              className="block w-full p-3.5 border border-solid border-black resize-none font-montserrat"
              type="email"
              name="email"
              placeholder={TEXT.mail}
              required
            />
          </div>
          <div className="mb-2.5">
            <textarea
              className="block w-full p-3.5 border border-solid border-black resize-none font-montserrat"
              name="letter"
              id="letter"
              placeholder={TEXT.message}
              required
            />
          </div>
          <Button text={TEXT.submit} type="submit" />
        </form>
      </div>
    </div>
  );
};
