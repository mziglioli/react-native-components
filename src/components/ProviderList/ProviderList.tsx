import React, { useEffect, useState } from 'react';
import type { DefaultProps } from '../../type';
import { View } from 'react-native';
import { ProviderCard } from '../ProviderCard';
import type { Provider } from '../../type/solicitor';
import { InputText } from '../InputText';

export interface ProviderListProps extends DefaultProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  score?: number;
}

const pData = {
  success: true,
  error: null,
  data: {
    content: [
      {
        active: true,
        id: '616561635b696a4f2ed6a6e0',
        name: 'Provider test1',
        email: '1provider@test.com',
        address: null,
        city: null,
        postCode: null,
        phone: null,
        creatorId: 'user_1',
        scoreAvg: 5,
        recommendationsUserIds: null,
        recommendations: null,
        scoreQtd: 2,
      },
      {
        active: true,
        id: '616561635b696a4f2ed6a6e1',
        name: 'Provider test2',
        email: '2provider@test.com',
        address: null,
        city: null,
        postCode: null,
        phone: null,
        creatorId: 'user_2',
        scoreAvg: 2,
        recommendationsUserIds: null,
        recommendations: null,
        scoreQtd: 2,
      },
      {
        active: true,
        id: '616561635b696a4f2ed6a6e3',
        name: 'Provider test3',
        email: '3provider@test.com',
        address: null,
        city: null,
        postCode: null,
        phone: null,
        creatorId: 'user_3',
        scoreAvg: 3.3,
        recommendationsUserIds: null,
        recommendations: null,
        scoreQtd: 2,
      },
    ],
    pageable: {
      sort: {
        unsorted: true,
        sorted: false,
        empty: true,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 10,
      paged: true,
      unpaged: false,
    },
    totalElements: 3,
    totalPages: 1,
    last: true,
    size: 10,
    sort: {
      unsorted: true,
      sorted: false,
      empty: true,
    },
    number: 0,
    numberOfElements: 3,
    first: true,
    empty: false,
  },
};

const ProviderList = ({ testId }: ProviderListProps) => {
  const [text, setText] = useState('');
  const [providers, setProviders] = useState<Provider[]>([]);

  const changeInputValue = (value: string) => {
    console.log('changeInputValue', value);
    setText(value);
  };

  useEffect(() => {
    setProviders(pData.data.content);
  }, []);

  useEffect(() => {
    console.log('useEffect: text', text);
    if (text.length > 3) {
      const filtered = pData.data.content.filter((e) => e.name.includes(text));
      setProviders(filtered);
    }
  }, [text]);

  return (
    <View>
      <InputText
        value={text}
        testId={testId}
        showError={false}
        errorMessage={'Email is invalid'}
        validate={changeInputValue}
        props={{
          label: 'Solicitor',
          placeholder: 'Enter your solicitor name',
          autoCapitalize: 'none',
          returnKeyType: 'next',
          maxLength: 100,
        }}
      />
      <View>
        {providers &&
          providers.map((provider: any, index: number) => (
            <ProviderCard
              title={provider.name}
              subtitle={''}
              image={''}
              score={3}
              description={''}
              testId={`ProviderList__Card__${index}`}
            />
          ))}
      </View>
    </View>
  );
};
export { ProviderList };
