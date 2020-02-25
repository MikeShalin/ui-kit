## Dropdown component

    <Wrapper dark top>
      <SelectedOption>Пункт #1</SelectedOption>
      <OptionContainer list>
        {options.map(option => (
            <Option
              key={option}
              onClick={onClick}
              disabled={option !== 'Пункт #1'}
            >
              {option}
            </Option>
          );
        })}
      </OptionContainer>
    </Wrapper>

- Для использования компонента, нужно импортировать из корня директории, компоненты :

```
import { Wrapper, Option, OptionContainer, SelectedOption } from '.';
```

- Пример подключения компоненты выше
- Компонент `Wrapper` получает необязательные пропсы `dark` и `top`, для
  включения темного режима и открывания списка наверх, соответственно
- Для логики скрытия/открытия списка, компонент `OptionContainer` помечается пропсом `list`
- Компонент `Option` получает необязательный пропс `disabled`
