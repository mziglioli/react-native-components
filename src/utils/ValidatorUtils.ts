const namePattern =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/i;
const emailPattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
const secretPattern = /^([0-9]{4})$/i;

export const isValidName = (name: string | undefined): boolean => {
  return !!(name && name.trim().length > 0 && name.match(namePattern));
};

export const isValidSecret = (secret: string | undefined): boolean => {
  return !!(secret && secret.trim().length > 0 && secret.match(secretPattern));
};

export const isValidEmail = (email: string | undefined): boolean => {
  return !!(email && email.match(emailPattern));
};
export const isValidPassword = (password: string | undefined): boolean => {
  return !!(
    password &&
    password.trim().length > 3 &&
    password.trim().length < 100
  );
};
