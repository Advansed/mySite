import { IonText, IonTitle } from '@ionic/react';
import React from 'react';
import './Functions.css'

export function Policy():JSX.Element{
    let elem = <>
        <p className="plc-f">
            Настоящая Политика конфиденциальности мобильного приложения (далее —Политика) действует в отношении всей информации, которую ООО «АккаунтПро» и/или его аффилированные лица могут получить о пользователе во время использования им данного приложения. Согласие пользователя на предоставление персональной информации, данное им в соответствии с настоящей Политикой в рамках отношений с одним из лиц, входящих в персонал ООО «АккаунтПро», распространяется на все лица, входящие в ООО «АккаунтПро».
        </p> 
        <p>
            Использование приложения означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации; в случае несогласия с этими условиями пользователь должен воздержаться от использования приложения.
        </p>   
        <p>
           <b>1. Персональная информация пользователей, которую получает и обрабатывает мобильное приложение</b>
        </p>
        <p>
            1.1. В рамках настоящей Политики под «персональной информацией пользователя» понимаются:
        </p>
        <p>
            1.1.1. Персональная информация, которую пользователь предоставляет о себе самостоятельно при регистрации (создании учётной записи) или в процессе использования приложения, включая персональные данные пользователя. Информация предоставляется пользователем на его усмотрение.
        </p>
        <p>
            1.1.2 Данные, которые автоматически передаются ООО «АккаунтПро» в процессе их использования с помощью установленного на устройстве приложения, в том числе информация из cookie, информация об устройстве пользователя.        </p>
        <p>
            1.2. Настоящая Политика применима только к приложению ООО «АккаунтПро». ООО «АккаунтПро» не контролирует и не несет ответственность за информацию третьих лиц, на которые пользователь может перейти по ссылкам, доступным в приложении. На таких сайтах у пользователя может собираться или запрашиваться иная персональная информация, а также могут совершаться иные действия.        </p>
        <p>
            1.3. ООО «АккаунтПро» в общем случае не проверяет достоверность персональной информации, предоставляемой пользователями, и не осуществляет контроль за их дееспособностью. Однако ООО «АккаунтПро» исходит из того, что информация, переданная им от пользователей, является достоверной и поддерживает эту информацию в актуальном состоянии.        </p>
        <p>
            <b>2. Цели сбора и обработки персональной информации пользователей</b>
        </p>
        <p>
            2.1. Приложение собирает и хранит только те персональные данные, которые необходимы для предоставления сервисов, входящих в состав приложения.
        </p>
        <p>
            2.2. Персональную информацию пользователя приложения ООО «АккаунтПро» может использовать в следующих целях:
        </p>
        <p>
            2.2.1. Идентификация стороны в рамках соглашений;
        </p>
        <p>
            2.2.2. Предоставление пользователю персонализированных сервисов;        
        </p>
        <p>
            2.2.3. Связь с пользователем, в том числе направление уведомлений, запросов и информации, касающихся использования сервисов, оказания услуг, а также обработка запросов и заявок от пользователя;        </p>
        <p>
            2.2.4. Улучшение качества приложения, удобства его использования, разработка новых сервисов и услуг;        
        </p>
        <p>
            2.2.5. Проведение статистических и иных исследований на основе обезличенных данных.        
        </p>
        <p>
            <b>3. Условия обработки персональной информации пользователя и её передачи третьим лицам</b>        
        </p>
        <p>
            3.1. В отношении персональной информации пользователя сохраняется ее конфиденциальность, кроме случаев добровольного предоставления пользователем информации о себе для общего доступа неограниченному кругу лиц.        </p>
        <p>
            3.2. ООО «АккаунтПро» вправе передать персональную информацию пользователя третьим лицам в следующих случаях:
        </p>
        <p>
            3.2.1. Пользователь выразил свое согласие на такие действия;        
        </p>
        <p>
            3.2.2. Передача необходима в рамках использования пользователем определенного сервиса либо для оказания услуги пользователю;        
        </p>
        <p>
            3.2.3. Передача предусмотрена российским или иным применимым законодательством в рамках установленной законодательством процедуры;
        </p>
        <p>
            3.3. При обработке персональных данных пользователей приложения ООО «АккаунтПро» руководствуется Федеральным законом РФ «О персональных данных».
        </p>
        <p>
            <b>4. Изменение пользователем персональной информации</b>
        </p>
        <p>
            4.1. Пользователь может изменить или дополнить персональную информацию, обратившись к специалистам ООО «АккаунтПро».
        </p>
        <p>
            4.2. Пользователь также может удалить предоставленную им в рамках определенной учетной записи персональную информацию, запросив удаление своей учетной записи через специалистов ООО «АккаунтПро» по электронной почте acccountpro@gmail.com
        </p>
        <p>
            <b>5. Меры, применяемые для защиты персональной информации пользователей</b>
        </p>
        <p>
            5.1. ООО «АккаунтПро» принимает необходимые и достаточные организационные и технические меры для защиты персональной информации пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий с ней третьих лиц.
        </p>
        <p>
            <b>6. Изменение Политики конфиденциальности. Применимое законодательство</b>
        </p>
        <p>
            6.1. ООО «АккаунтПро» имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в актуальной редакции указывается дата последнего обновления. Новая редакция Политики вступает в силу с момента ее размещения, если иное не предусмотрено новой редакцией Политики. Действующая редакция всегда находится на странице по адресу https://counter.bbgroup.pro/policy/        
        </p>
        <p>
            6.2. К настоящей Политике и отношениям между пользователем и ООО «АккаунтПро», возникающим в связи с применением Политики конфиденциальности, подлежит применению право Российской Федерации.        
        </p>
        <p>
            <b>7. Обратная связь. Вопросы и предложения</b>       
        </p>
        <p>
            7.1. Все предложения или вопросы по поводу настоящей Политики следует сообщать в на электронную почту acccountpro@gmail.com
        </p>
    </>

    return elem
}