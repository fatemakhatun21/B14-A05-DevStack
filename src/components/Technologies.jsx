import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import YourStack from "./YourStack";
const Technologies = () => { 
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
  fetch("/technologies.json")
    .then((res) => res.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
    <div className="text-center py-20 text-lg font-medium">Loading technologies...
    </div>
    );
  }
  const handleAddToStack = (technology) => {
  const alreadyAdded = stack.find((item) => item.id === technology.id);
  if (alreadyAdded) {
    toast.warning("This technology is already in your stack.");
    return;
  }
  setStack([...stack, technology]);
  toast.success(`${technology.name} added to your stack.`);
};
  const handleRemove = (id) => {
  const removedItem = stack.find((item) => item.id === id);
  const remaining = stack.filter((item) => item.id !== id);
  setStack(remaining);
  if (removedItem) {
    toast.info(`${removedItem.name} removed from your stack.`);
  }
};
const handleRemoveAll = () => {
  setStack([]);
  toast.info("All technologies removed from your stack.");
};
return (
  <section className="max-w-7xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold mb-2">Explore Technologies</h2>
    <p className="text-gray-600 mb-8">Discover modern tools and technologies to build your perfect developer stack.</p>
    <div className="grid lg:grid-cols-[1fr_320px] gap-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((technology) => (
        <div key={technology.id} className="border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
                <img src={technology.icon} alt={technology.name} className="w-12 h-12"/>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-700">{technology.badge}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{technology.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{technology.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100">{technology.category}</span>
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100">{technology.difficulty}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="font-medium">⭐ {technology.rating}</span>
             <button onClick={() => handleAddToStack(technology)}
             disabled={stack.some((item) => item.id === technology.id)}
             className={`px-4 py-2 rounded-full text-sm font-medium ${
              stack.some((item) => item.id === technology.id) ? "bg-gray-300 text-gray-600 cursor-not-allowed": "bg-brand-gradient text-white"}`}>
                {stack.some((item) => item.id === technology.id)  ? "✓ Added to Stack": "Add to Stack"}
                </button>
            </div>
            </div>
      ))}
    </div>
    <YourStack stack={stack} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll} />
    </div>
  </section>
);
};

export default Technologies;