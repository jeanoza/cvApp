import styled from "styled-components";
import { useState, useEffect } from "react";
import { dbService } from "fbase";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 18vw;
  width: 100%;
  padding-bottom: 30px;
  @media (max-width: 1024px) {
    top: 300px;
    width: 98vw;
    min-width: 950px;
    left: 0;
  }
`;
const Input = styled.input`
  display: block;
  margin: 10px 0px;
  width: 50%;
`;

const Admin = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [comment1, setComment1] = useState("");
  const [comment2, setComment2] = useState("");
  const [comment3, setComment3] = useState("");
  const [author, setAuthor] = useState("");
  const [yearStart, setYearStart] = useState("");
  const [yearEnd, setYearEnd] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [backdropUrl, setBackdropUrl] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const onChangeSelect = (event) => {
    const {
      target: {
        options: { selectedIndex },
      },
    } = event;
    switch (selectedIndex) {
      case 1:
        setCategory("Formation");
        break;
      case 2:
        setCategory("Profession");
        break;
      case 3:
        setCategory("Project");
        break;
      default:
        setCategory("");
    }
  };
  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "title") setTitle(value);
    else if (name === "sub") setSub(value);
    else if (name === "text1") setText1(value);
    else if (name === "text2") setText2(value);
    else if (name === "text3") setText3(value);
    else if (name === "text4") setText4(value);
    else if (name === "comment1") setComment1(value);
    else if (name === "comment2") setComment2(value);
    else if (name === "comment3") setComment3(value);
    else if (name === "author") setAuthor(value);
    else if (name === "year_start") setYearStart(value);
    else if (name === "year_end") setYearEnd(value);
    else if (name === "image_url") setImageUrl(value);
    else if (name === "backdrop_url") setBackdropUrl(value);
    else if (name === "link1") setLink1(value);
    else if (name === "link2") setLink2(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const dataObj = {
      title: title,
      sub: sub,
      text1: text1,
      text2: text2,
      text3: text3,
      text4: text4,
      comment1: comment1,
      comment2: comment2,
      comment3: comment3,
      author: author,
      image_url: imageUrl,
      backdrop_url: backdropUrl,
      year_start: yearStart,
      year_end: yearEnd,
      link1: link1,
      link2: link2,
    };
    if (category !== "") {
      await dbService.collection(category).add(dataObj);
      setCategory("");
      setTitle("");
      setSub("");
      setText1("");
      setText2("");
      setText3("");
      setText4("");
      setComment1("");
      setComment2("");
      setComment3("");
      setAuthor("");
      setImageUrl("");
      setBackdropUrl("");
      setYearStart("");
      setYearEnd("");
      setLink1("");
      setLink2("");
      alert("DB is registered!:))");
    } else {
      alert("chose the category!:((");
      return;
    }
  };
  return (
    <Container>
      <form onSubmit={onSubmit} method="post">
        <select onChange={onChangeSelect} value={category}>
          <option value="">----------</option>
          <option value="Formation">Formation</option>
          <option value="Profession">Profession</option>
          <option value="Project">Project</option>
        </select>
        <Input
          onChange={onChange}
          type="text"
          value={title}
          name="title"
          placeholder="title"
        />
        <Input
          onChange={onChange}
          type="text"
          name="sub"
          value={sub}
          placeholder="sub"
        />
        <Input
          onChange={onChange}
          type="text"
          name="year_start"
          value={yearStart}
          placeholder="year_start"
        />
        <Input
          onChange={onChange}
          type="text"
          name="year_end"
          value={yearEnd}
          placeholder="year_end"
        />
        <Input
          onChange={onChange}
          type="text"
          name="text1"
          value={text1}
          placeholder="text1"
        />
        <Input
          onChange={onChange}
          type="text"
          name="text2"
          value={text2}
          placeholder="text2"
        />
        <Input
          onChange={onChange}
          type="text"
          name="text3"
          value={text3}
          placeholder="text3"
        />
        <Input
          onChange={onChange}
          type="text"
          name="text4"
          value={text4}
          placeholder="text4"
        />
        <Input
          onChange={onChange}
          type="text"
          name="comment1"
          value={comment1}
          placeholder="comment1"
        />
        <Input
          onChange={onChange}
          type="text"
          name="comment2"
          value={comment2}
          placeholder="comment2"
        />
        <Input
          onChange={onChange}
          type="text"
          name="comment3"
          value={comment3}
          placeholder="comment3"
        />
        <Input
          onChange={onChange}
          type="text"
          name="author"
          value={author}
          placeholder="author"
        />
        <Input
          onChange={onChange}
          type="text"
          name="image_url"
          value={imageUrl}
          placeholder="image_url"
        />
        <Input
          onChange={onChange}
          type="text"
          placeholder="backdrop_url"
          value={backdropUrl}
          name="backdrop_url"
        />
        <Input
          onChange={onChange}
          type="text"
          placeholder="link1"
          value={link1}
          name="link1"
        />
        <Input
          onChange={onChange}
          type="text"
          placeholder="link2"
          value={link2}
          name="link2"
        />
        <input type="submit" value="Submit" />
      </form>
    </Container>
  );
};
export default Admin;
