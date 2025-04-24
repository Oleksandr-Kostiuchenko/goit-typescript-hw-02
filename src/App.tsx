//* React
import { useState, useEffect } from "react";
import "./App.css";

//* Components
import SearchBar from "./components/searchbar/SearchBar";
import ImageGallery from "./components/imagegallery/ImageGallery";
import LoadMoreBtn from "./components/loadmorebtn/LoadMoreBtn";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errormessage/ErrorMessage";
import LangSwitcher from "./components/langswitcher/LangSwitcher";
import { IoMenuSharp } from "react-icons/io5";

import ImageModal from "./components/imagemodal/ImageModal";
import Modal from "react-modal";
Modal.setAppElement("#root");

//* Import fetch function
import { FetchImages } from "./FetchImages";

//* TS
import { ImageDataType } from "./App.types";

const App: React.FC = () => {
  const [galleryData, setGalleryData] = useState<ImageDataType[]>([]);
  const [userQuery, setUserQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ImageDataType | null>(null);

  const [langModalIsOpen, setLangModalIsOpen] = useState<boolean>(false);

  const handleCloseLangModal = (): void => {
    setLangModalIsOpen(false);
  };

  const openModal = (imageData: ImageDataType): void => {
    setModalImage(imageData);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalImage(null);
    setModalIsOpen(false);
  };

  const handleSearch = (topic: string): void => {
    setGalleryData([]);
    setUserQuery(topic);
    setPage(1);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  useEffect((): void => {
    if (userQuery === "") {
      return;
    }

    const getGalleryData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        setError(false);

        const fetchGalleryData = await FetchImages({ topic: userQuery, page });
        const results: ImageDataType[] = fetchGalleryData.results;
        setGalleryData((prevPhotos) => [...prevPhotos, ...results]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getGalleryData();
  }, [userQuery, page]);

  return (
    <>
      <header>
        <SearchBar onSearch={handleSearch} />
        <button
          className="menu-btn"
          onClick={(): void => {
            setLangModalIsOpen(true);
          }}
        >
          <IoMenuSharp className="menu-icon" />
        </button>
      </header>

      {langModalIsOpen && (
        <LangSwitcher handleCloseLangModal={handleCloseLangModal} />
      )}

      {galleryData.length > 0 && (
        <ImageGallery galleryArr={galleryData} openModal={openModal} />
      )}

      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      {galleryData.length > 0 && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={`modal ${modalIsOpen ? "modalIsOpen" : ""}`}
        overlayClassName={`overlay ${modalIsOpen ? "overlayIsOpen" : ""}`}
        closeTimeoutMS={300}
      >
        {modalIsOpen && <ImageModal modalImage={modalImage} />}
      </Modal>
    </>
  );
};

export default App;
