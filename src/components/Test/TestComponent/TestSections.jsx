function TestSections({ data }) {
  return (
    <section className="self-center mt-8 w-full max-md:max-w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed">
          <thead>
            <tr>
              <th className="w-2/5 text-sm  text-gray-500 text-left">
                Sections
              </th>
              <th className="w-1/5  text-sm  text-gray-500 text-left">
                Question
              </th>
              <th className="w-2/5 text-sm  text-gray-500 text-left">
                Maximum Marks
              </th>
            </tr>
          </thead>
          <tbody>
            {data.sections.map((section, index) => (
              <tr key={index}>
                <td className="w-1/3 text-base py-1 truncate">
                  {section.title}
                </td>
                <td className="w-1/3 text-base py-1 truncate">
                  {section.questions}
                </td>
                <td className="w-1/3 text-base py-1 truncate">
                  {section.maximum_marks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TestSections;
