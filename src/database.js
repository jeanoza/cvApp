import { dbService } from "fbase";

export const getProfessionList = (setProfessionList) => {
  dbService
    .collection("Profession")
    .orderBy("index")
    .onSnapshot((snapshot) => {
      const professionArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProfessionList(professionArray);
    });
};
export const getFormationList = (setFormationList) => {
  dbService
    .collection("Formation")
    .orderBy("index")
    .onSnapshot((snapshot) => {
      const formationArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFormationList(formationArray);
    });
};

export const getProjectList = (setProjectList) => {
  dbService
    .collection("Project")
    .orderBy("index")
    .onSnapshot((snapshot) => {
      const projectArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjectList(projectArray);
    });
};

export const getLangueList = (setLangueList) => {
  dbService
    .collection("Langue")
    .orderBy("index")
    .onSnapshot((snapshot) => {
      const langueArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLangueList(langueArray);
    });
};

export const getInformatiqueList = (setInformatiqueList) => {
  dbService
    .collection("Informatique")
    .orderBy("index")
    .onSnapshot((snapshot) => {
      const informatiqueArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInformatiqueList(informatiqueArray);
    });
};
