const YourStack = ({ stack, handleRemove, handleRemoveAll }) => {
  return (
    <aside className="border border-gray-200 rounded-2xl p-5 shadow-sm h-fit">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Your Stack</h2>
        <span className="text-sm text-gray-500">{stack.length} Selected</span>
      </div>
      {stack.length > 0 && (
        <button onClick={handleRemoveAll}
        className="w-full mb-4 border border-red-300 text-red-500 py-2 rounded-lg font-medium">Remove All
        </button>
      )}
      <div className="space-y-3">
        {stack.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500"> No technologies selected yet.
            </p>
          </div>) : (
          stack.map((item) => (
            <div key={item.id}className="flex items-center justify-between border border-gray-200 rounded-xl p-3">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-10 h-10"/>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
              <button onClick={() => handleRemove(item.id)} className="text-red-500 font-bold text-lg"> ✕ </button>
            </div>
            ))
            )}
      </div>
      </aside>
      );
    };

export default YourStack;