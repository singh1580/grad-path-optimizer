
import { Checkbox } from "@/components/ui/checkbox";

interface FilterSectionProps {
  title: string;
  items: string[];
}

const FilterSection = ({ title, items }: FilterSectionProps) => {
  return (
    <div>
      <h3 className="font-medium mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <Checkbox id={`${title}-${item}`.toLowerCase()} />
            <label
              htmlFor={`${title}-${item}`.toLowerCase()}
              className="text-sm text-gray-700"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
