function TestHeader({ data ,close}) {
  return (
    <header className="flex flex-col  w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full text-sm font-medium leading-4 text-blue-800 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-1.5 justify-center px-2 py-1.5 bg-blue-200 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d262efb894b440ebccfc59d615439352a915b2a545bf785b058a25dba046b18e?apiKey=8a82faa9db93454483a68c973b38c7b0&&apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="shrink-0 w-3.5 aspect-square"
            alt=""
          />
          <div>Attempted </div>
        </div>
        <button
         onClick={close}
         >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?apiKey=8a82faa9db93454483a68c973b38c7b0&&apiKey=8a82faa9db93454483a68c973b38c7b0"
          className="shrink-0 w-6 aspect-square"
          alt=""
        />
        </button>
      </div>
      <h1 className="mt-4 text-2xl font-semibold tracking-normal leading-8 text-black max-md:max-w-full">
        {data.title}
      </h1>
    </header>
  );
}

export default TestHeader;
