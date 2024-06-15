import { Errors } from '../types/Errors'

export const errorMessage = ({
  zipcode,
  _form
}: {
  zipcode?: string[];
  _form?: string[];
}): Errors => ({
  errors: {
    zipcode,
    _form
  }
});
