"use client";
import DragAndDropFiles from "@/components/common/DragAndDropFiles";
import InputBox from "@/components/common/InputBox";
import MultiStepper from "@/components/common/MultiStepper";
import SelectBox from "@/components/common/SelectBox";
import { Button } from "@/components/ui/button";
import { resetStep } from "@/redux/features/stepper/stepperSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CreateProductForm() {
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);
  const dispatch = useDispatch();
  const { step } = useSelector((state: RootState) => state.stepper);
  const totalStep = 4;

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(selectedFiles);
    dispatch(resetStep());
  };

  return (
    <MultiStepper totalStep={totalStep}>
      <form action="#" className="min-h-[50vh]" onSubmit={onHandleSubmit}>
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4">
            <div>
              <h5 className="font-bold text-lg">Summary</h5>
              <p className=" text-gray-700 mt-2">
                Edit your product description and necessary information from
                here
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <InputBox
                name="title"
                label="title"
                placeholder="Product title"
              />
              <InputBox
                name="title"
                label="title"
                placeholder="Product title"
                type="date"
              />
              <InputBox name="sku" label="sku" placeholder="Product sku" />
              <SelectBox
                name="productType"
                label="Product Type"
                value=""
                onChange={(val) => console.log("Selected:", val)}
                options={[
                  { label: "Digital Product", value: "digital-product" },
                  { label: "Physical Product", value: "physical-product" },
                ]}
              />
              <SelectBox
                name="categories"
                label="categories"
                value=""
                onChange={(val) => console.log("Selected:", val)}
                options={[
                  { label: "Fruits", value: "fruits" },
                  { label: "Grocery", value: "grocery" },
                  { label: "Meat", value: "meat" },
                  { label: "Cat Food", value: "cat-food" },
                ]}
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4 ">
            <div>
              <h5 className="text-lg font-bold">Upload new product images</h5>
              <p className=" text-gray-700 mt-2">
                Upload your product image gallery here
              </p>
            </div>
            <div className="">
              <DragAndDropFiles onFileChange={setSelectedFiles} />
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4">
            <div>
              <h5 className="text-lg font-bold">Pricing</h5>
              <p className=" text-gray-700 mt-2">
                Add your product pricing here
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <InputBox
                type="number"
                name="price"
                label="Price"
                placeholder="10"
                icon="$"
              />
              <InputBox
                type="number"
                name="cost-price"
                label="Cost Price"
                placeholder="15"
                icon="$"
              />
              <InputBox
                type="number"
                name="retail-price"
                label="Retail Price"
                placeholder="10"
                icon="$"
              />
              <InputBox
                type="number"
                name="sale-price"
                label="Sale Price"
                placeholder="20"
                icon="$"
              />
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4">
            <div>
              <h5 className="text-lg font-bold">Inventory Tracking</h5>
              <p className=" text-gray-700 mt-2">
                Add your product inventory info here
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <InputBox
                type="number"
                name="current-stock-lavel"
                label="Current Stock Level"
                placeholder="10"
              />
              <InputBox
                type="number"
                name="low-stock-lavel"
                label="Low Stock Level"
                placeholder="15"
              />
            </div>
          </div>
        )}
        {step === totalStep && (
          <Button variant="blue" type="submit" className="ml-auto block mt-10">
            Submit
          </Button>
        )}
      </form>
    </MultiStepper>
  );
}
