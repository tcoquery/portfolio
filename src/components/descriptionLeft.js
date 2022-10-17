function DescriptionLeft(props) {
    return (
      <div class="flex flex-col w-5/6 justify-self-end mt-8 md:mt-0">            
        <div class="text-2xl text-red-800 font-semibold text-center md:text-right mb-6">{props.title}</div>
        <p class="text-justify md:text-left text-lg border-b pb-4 border-gray-400">{props.text}</p>
        <p class="text-sm text-gray-600 py-2">{props.tags}</p>
      </div>
    );
  }
  
  export default DescriptionLeft
;
  