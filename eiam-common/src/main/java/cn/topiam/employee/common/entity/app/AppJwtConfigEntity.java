/*
 * eiam-common - Employee Identity and Access Management
 * Copyright © 2022-Present Jinan Yuanchuang Network Technology Co., Ltd. (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.common.entity.app;

import java.time.Duration;

import org.hibernate.annotations.SoftDelete;

import cn.topiam.employee.common.enums.app.JwtBindingType;
import cn.topiam.employee.common.enums.app.JwtIdTokenSubjectType;
import cn.topiam.employee.support.repository.SoftDeleteConverter;
import cn.topiam.employee.support.repository.base.BaseEntity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import static cn.topiam.employee.support.repository.base.BaseEntity.IS_DELETED_COLUMN;

/**
 * APP Form 配置
 *
 * @author TopIAM
 * Created by support@topiam.cn on 2023/02/12 22:31
 */
@Getter
@Setter
@ToString
@Entity
@Accessors(chain = true)
@Table(name = "eiam_app_jwt_config")
@SoftDelete(columnName = IS_DELETED_COLUMN, converter = SoftDeleteConverter.class)
public class AppJwtConfigEntity extends BaseEntity {

    /**
     * APP ID
     */
    @Column(name = "app_id")
    private String                appId;

    /**
     * 业务系统中的JWT SSO地址，在单点登录时本系统将向该地址发送id_token信息，参数名为id_token，业务系统通过id_token与Public Key可获取业务系统中的用户信息，如果在业务系统（SP）发起登录，请求SP登录地址时如果携带service参数，系统会检验合法性，成功后会将浏览器重定向到该地址，并携带id_token身份令牌。
     */
    @Column(name = "redirect_url")
    private String                redirectUrl;

    /**
     * 业务系统中在JWT SSO成功后重定向的URL，一般用于跳转到二级菜单等，
     * 若设置了该URL，在JWT SSO时会以参数target_uri优先传递该值，
     * 若未设置该值，此时若SSO中有请求参数target_uri，则会按照请求参数传递该值。此项可选。
     */
    @Column(name = "target_link_url")
    private String                targetLinkUrl;

    /**
     * 跳转方式
     */
    @Column(name = "binding_type")
    private JwtBindingType        bindingType;

    /**
     * id_token sub 类型
     */
    @Column(name = "id_token_subject_type")
    private JwtIdTokenSubjectType idTokenSubjectType;

    /**
     * 令牌过期时间
     */
    @Column(name = "id_token_time_to_live")
    private Duration              idTokenTimeToLive;
}
