import Head from "next/head";
import ResponsiveRow from "@/components/ResponsiveRow/ResponsiveRow";
import Text from "@/components/Text/Text";
import Select from "@/components/Select/Select";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Drawer from "@/components/Drawer/Drawer";
import Collapse from "@/components/Collapse/Collapse";
import WittySpinner from "@/components/WittySpinner/WittySpinner";
import QuantityStepper from "@/components/QuantityStepper/QuantityStepper";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [accordionIndex, setAccordionIndex] = useState<null | number>(null);
  const [quantity, setQuantity] = useState<number>(0);

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <Head>
        <title>UI Kit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drawer
        isVisible={isDrawerVisible}
        sideContent="Side menu"
        onOverlayClick={() => setIsDrawerVisible(false)}
      >
        <div className="space-y-8 p-2">
          <QuantityStepper
            onChange={(value) => {
              setQuantity(value);
            }}
            value={quantity}
          />

          <Slider
            currentSlide={currentSlide}
            onSlideChange={setCurrentSlide}
            autoAnimate={false}
            isSlideCountVisible
            rightIcon="Custom right"
          >
            <div className="bg-red-500 h-40 w-full">1</div>
            <div className="bg-red-500 h-40 w-40">2</div>
            <div className="bg-red-500 h-40 w-40">3</div>
            <div className="bg-red-500 h-40 w-40">4</div>
            <div className="bg-red-500 h-40 w-40">5</div>
            <div className="bg-red-500 h-40 w-40">6</div>
            <div className="bg-red-500 h-40 w-40">7</div>
            <div className="bg-red-500 h-40 w-40">8</div>
            <div className="bg-red-500 h-40 w-40">9</div>
            <div className="bg-red-500 h-40 w-40">10</div>
            <div className="bg-red-500 h-40 w-40">11</div>
          </Slider>

          <button className="btn rounded-full">Press me</button>

          <WittySpinner isLoading />

          <Collapse
            heading="Collapse"
            className="w-60"
            isCollapsed={isCollapsed}
            onToggle={() => setIsCollapsed(!isCollapsed)}
          >
            <div>Some content.</div>
            <div>Some content.</div>
            <div>Some content.</div>
            <div>Some content.</div>
            <div>Some content.</div>
            <div>Some content.</div>
          </Collapse>

          <div className="border w-60 p-2 rounded-box">
            {Array.from({ length: 4 }).map((_, index) => (
              <Collapse
                key={index}
                heading={`Accordion ${index}`}
                isCollapsed={accordionIndex !== index}
                onToggle={() =>
                  setAccordionIndex(accordionIndex === index ? null : index)
                }
              >
                <div>Some content.</div>
                <div>Some content.</div>
                <div>Some content.</div>
                <div>Some content.</div>
              </Collapse>
            ))}
          </div>

          <ResponsiveRow>
            <div className="bg-primary h-10 flex-[2]">1</div>
            <div className="bg-secondary h-10 flex-1">2</div>
            <div className="bg-accent h-10 flex-1">2</div>
          </ResponsiveRow>

          <div>
            <Text size="xs">The quick brown fox jumps over the lazy dog.</Text>
            <Text size="sm">The quick brown fox jumps over the lazy dog.</Text>
            <Text>The quick brown fox jumps over the lazy dog.</Text>
            <Text size="lg">The quick brown fox jumps over the lazy dog.</Text>
            <Text size="xl">The quick brown fox jumps over the lazy dog.</Text>
            <Text size="2xl">The quick brown fox jumps over the lazy dog.</Text>
          </div>

          <div className="btn-group gap-4 separate-pills">
            <input
              type="radio"
              name="options"
              data-title="Red"
              className="btn"
            />
            <input
              type="radio"
              name="options"
              data-title="Green"
              className="btn"
            />
            <input
              type="radio"
              name="options"
              data-title="Magenta"
              className="btn"
            />
            <input
              type="radio"
              name="options"
              data-title="Onometopoea"
              className="btn"
            />
          </div>

          <div>
            <select className="select select-bordered">
              <option>Pick your favorite Simpson</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>

          <Select
            instanceId="select"
            isClearable
            options={[
              { value: "Homer", label: "Homer" },
              { value: "Marge", label: "Marge" },
              { value: "Bart", label: "Bart" },
              { value: "Lisa", label: "Lisa" },
            ]}
            isMulti
          />

          <div>
            <button className="btn" onClick={() => setIsModalVisible(true)}>
              Modal
            </button>
            <Modal
              isVisible={isModalVisible}
              onClose={() => setIsModalVisible(false)}
              title="This is a modal"
              body="This is the body of the modal. And this is a very long text to test the modal. This is the body of the modal. And this is a very long text to test the modal."
            />
          </div>

          <div>
            <button
              className="btn"
              onClick={() => setIsConfirmationModalVisible(true)}
            >
              Confirmation
            </button>

            <ConfirmationModal
              isVisible={isConfirmationModalVisible}
              onClose={() => setIsConfirmationModalVisible(false)}
            />
          </div>

          <button className="btn" onClick={() => setIsDrawerVisible(true)}>
            Open drawer
          </button>
        </div>
      </Drawer>
    </>
  );
}
